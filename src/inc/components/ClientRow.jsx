import { useMutation } from "@apollo/client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../graphql/mutations/ClientMutations";
import { GET_CLIENTS } from "../graphql/queries/ClientQueries";

const ClientRow = ({ id, name, email, phone }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: id },
    update: (cache, { data: { deleteClient } }) => {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
