import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent } from 'react';

interface SearchAreaProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSearchClick: () => void;
}

export const SearchArea = ({
  onChangeInput,
  value,
  onSearchClick,
}: SearchAreaProps) => (
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
