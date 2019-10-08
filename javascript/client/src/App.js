import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const GET_DOGS = gql`
  {
    dogs {
      id
      name
    }
  }
`;

const ADD_DOGS = gql`
  mutation App($name: String!) {
    createDog(name: $name) {
      name
    }
  }
`;

const App = () => {
  let input;
  const [createDog, { result }] = useMutation(ADD_DOGS);
  const { loading, _, data, refetch } = useQuery(GET_DOGS);

  if (loading) return "loading.......";
  return (
    <div style={{ margin: "100px" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          createDog({ variables: { name: input.value } });
          input.value = "";
          refetch();
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Cute Dogs</button>
      </form>
      <h2>List Of Dogs</h2>
      {data.dogs.map(elem => {
        return <li key={elem.id}>{elem.name}</li>;
      })}
    </div>
  );
};

export default App;
