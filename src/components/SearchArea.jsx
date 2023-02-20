import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const SearchArea = ({ onChangeInput, value, onSearchClick }) => (
  <div className={'search-area'}>
    <input
      type="text"
      placeholder="Search..."
      onChange={onChangeInput}
      value={value}
    />
    <button onClick={onSearchClick}>
      <i>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </i>
    </button>
  </div>
);
