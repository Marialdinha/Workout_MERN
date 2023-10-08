import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../../utils/mutations';
import { QUERY_USERS } from '../../utils/queries';

const UserForm = () => {
  const [name, setName] = useState('');

  const [addUser, { error }] = useMutation(ADD_USER, {
    refetchQueries: [
      QUERY_USERS,
      'allProfiles'
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { name },
      });

      //*****  maybe I have to remove it ******
     data;
      
      setName('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add yourself to the list...</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Add your profile name..."
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add Profile
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default UserForm;
