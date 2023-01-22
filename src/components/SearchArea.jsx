import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const SearchArea = (props) => {
  return (
    <div
      className={
        'search-area' + (props.isTop10Page ? ' search-area-top10' : '')
      }
    >
      <input
        type="text"
        placeholder="Search..."
        onChange={props.onChangeInput}
        value={props.value}
      />
      <i>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </i>
    </div>
  );
};
