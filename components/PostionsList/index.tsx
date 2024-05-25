import React, { useEffect, useState } from "react";
import RadioGroup from "@/components/RadioInput";
import "./style.scss";

interface Position {
  id: number;
  name: string;
}

interface PositionListProps {
  onSelect: (id: number) => void;
}

const PositionList: React.FC<PositionListProps> = ({ onSelect }) => {
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
    value: position.id.toString(), // Use ID as the value to pass to onSelect
  }));

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(Number(e.target.value));
  };

  return (
    <div>
      <RadioGroup
        title='Select your position'
        group={radioGroupData}
        onChange={handlePositionChange}
      />
    </div>
  );
};

export default PositionList;
