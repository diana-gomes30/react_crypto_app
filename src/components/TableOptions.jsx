import { NumPerPageOption } from './NumPerPageOption';
import { SearchArea } from './SearchArea';

export const TableOptions = (props) => {
  return (
    <div className="table-options">
      <SearchArea
        isTop10Page={props.isTop10Page}
        onChangeInput={props.onChangeInput}
        value={props.value}
      />

      {!props.isTop10Page && (
        <NumPerPageOption onChangeSelect={props.onChangeSelect} />
      )}
    </div>
  );
};
