import './Dropdown.css';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DropdownExampleDropdown() {
  const [categories, isLoading ] = useSelector((state) => [state.categories.entities, state.categories.loadind]);

  return (
    <Dropdown className="Dropdown" text='Categories' >
      <Dropdown.Menu>

        { !isLoading && categories.map((category, index) => {
          const url = `category/${category}`;
          return <Link  key={index} to={url}><Dropdown.Item text={category} /></Link>;
        })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownExampleDropdown;
