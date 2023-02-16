import { NumPerPageOption } from './NumPerPageOption';
import { SearchArea } from './SearchArea';

export const TableOptions = ({ onChangeInput, value, onChangeSelect }) => (
  <div className="table-options">
    <SearchArea onChangeInput={onChangeInput} value={value} />
    <NumPerPageOption onChangeSelect={onChangeSelect} />
  </div>
);
