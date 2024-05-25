// @/components/EmployeesList/index.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Preloader from "@/components/Preloader";

import "./style.scss";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string;
  registration_timestamp: number;
}

const EmployeesList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
        );
        const fetchedUsers = response.data.users;

        // Очистка списка пользователей перед загрузкой новой страницы
        if (page === 1) {
          setUsers([]);
        }

        // Фильтрация пользователей, чтобы убрать повторяющиеся элементы
        const uniqueUsers = fetchedUsers.filter(
          (user: User, index: number, self: User[]) =>
            self.findIndex((u: User) => u.id === user.id) === index
        );

        // Обновляем список пользователей с уникальными данными
        setUsers((prevUsers) => [...prevUsers, ...uniqueUsers]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setError("An error occurred while fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  const loadMoreUsers = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='user-list-container container'>
      <h2 className='section-title'>Working with GET request</h2>
      <div className='users-list'>
        {users.map((user) => (
          <Card
            key={user.id}
            personImage={user.photo}
            personName={user.name}
            personPosition={user.position}
            personEmail={user.email}
            personPhone={user.phone}
          />
        ))}
      </div>
      {page < totalPages && <Button onClick={loadMoreUsers}>Show more</Button>}
    </div>
  );
};

export default EmployeesList;
