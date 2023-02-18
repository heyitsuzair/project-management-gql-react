import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../graphql/queries/ClientQueries";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <h1>Something Went Wrong</h1>;

  return (
    <div>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client) => (
            <ClientRow key={client.id} {...client} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
