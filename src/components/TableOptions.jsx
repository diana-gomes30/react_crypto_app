import { NumPerPageOption } from './NumPerPageOption';
import { SearchArea } from './SearchArea';

export const TableOptions = ({
  onChangeInput,
  value,
  onChangeSelect,
  onSearchClick,
}) => (
  <div className="table-options">
    <SearchArea
      onChangeInput={onChangeInput}
      value={value}
      onSearchClick={onSearchClick}
    />
    <NumPerPageOption onChangeSelect={onChangeSelect} />
  </div>
);
