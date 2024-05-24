import React, { useEffect, useState } from "react";
import RadioGroup from "@/components/RadioInput"; // Импортируйте ваш RadioGroup компонент
import "./style.scss";

interface Position {
  id: number;
  name: string;
}

const PositionList: React.FC = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch(
          "https://frontend-test-assignment-api.abz.agency/api/v1/positions/"
        );
        const data = await response.json();
        if (data.success) {
          setPositions(data.positions);
        } else {
          setError("Failed to fetch positions");
        }
      } catch (error) {
        setError("An error occurred while fetching positions");
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const radioGroupData = positions.map((position) => ({
    id: position.id.toString(),
    label: position.name,
    name: "position",
    value: position.name.toLowerCase().replace(" ", "_"),
  }));

  return (
    <div>
      <RadioGroup title='Select your position' group={radioGroupData} />
    </div>
  );
};

export default PositionList;
