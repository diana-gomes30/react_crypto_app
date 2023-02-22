import { ChangeEvent } from 'react';
import { NumPerPageOption } from './NumPerPageOption';
import { SearchArea } from './SearchArea';

interface TableOptionsProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onChangeSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  onSearchClick: () => void;
}

export const TableOptions = ({
  onChangeInput,
  value,
  onChangeSelect,
  onSearchClick,
}: TableOptionsProps) => (
  <div className="table-options">
    <SearchArea
      onChangeInput={onChangeInput}
      value={value}
      onSearchClick={onSearchClick}
    />
    <NumPerPageOption onChangeSelect={onChangeSelect} />
  </div>
);
