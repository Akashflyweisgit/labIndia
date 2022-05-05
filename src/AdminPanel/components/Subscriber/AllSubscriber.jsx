/** @format */

import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router";
import HOC from "../../Common/HOC";
import { ContainerS } from "../../Common/CommonStyling";
import Header from "../../Common/Header";
import axios from "axios";

const AllSubscriber = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      // setLoading(true);

      const auth = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const { data: response } = await axios.get(
          "https://lab-india.herokuapp.com/api/all-user",
          auth
        );

        setUsers(response);
        console.log("res", response);

        // console.log("packages", packages);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUsers();
  }, []);

  console.log("users", users);

  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      name: "Test 1",
      email: "test@gmail.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHuhglF2CsQlcDZnlhFR4wmCPe6vypsSnZNlMDeu21rnQKI5BQys5Ff5ddat9TjQLV44&usqp=CAU",
      nameOncard: "Test 1",
      cardNumber: "1234-5678-9012-3456",
      expiryDate: "12/20",
      cvv: "123",
    },
    {
      id: 2,
      name: "Test 2",
      email: "test@gmail.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsK6oIKzeSCKiqpjv5cuoC4ZC_hJ0FxNkvQ&usqp=CAU",
      nameOncard: "Test 2",
      cardNumber: "1234-5678-9012-3456",
      expiryDate: "12/20",
      cvv: "123",
    },
    {
      id: 3,
      name: "Test 3",
      email: "test@gmail.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyVv0yPolQXIK8pO1Fb9OttQRSClAaTxwI7EEFNhyVXvRTXgEU5QPbQEsuBsdK0aooUE&usqp=CAU",
      nameOncard: "Test 3",
      cardNumber: "1234-5678-9012-3456",
      expiryDate: "12/20",
      cvv: "123",
    },
  ];

  return (
    <>
      <ContainerS>
        <Header cname={"All Subscriber"} />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data) => (
              <tr key={data.id}>
                <td>
                  <img
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "999px",
                      objectFit: "cover",
                    }}
                    src={data.profilepicture}
                    alt=""
                  />
                </td>
                <td>{data.firstname} </td>
                <td>{data.lastname} </td>
                <td>{data.email} </td>

                <td>
                  <button
                    onClick={() =>
                      navigate("/view-single-sub", { state: data })
                    }
                    style={{
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "green",
                      color: "#fff",
                      margin: "0 10px",
                    }}
                  >
                    View
                  </button>
                  <button
                    style={{
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "red",
                      color: "#fff",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContainerS>
    </>
  );
};

export default HOC(AllSubscriber);
