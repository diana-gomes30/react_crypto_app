export const NumPerPageOption = (props) => {
  return (
    <div className="num-per-page">
      <select
        onChange={props.onChangeSelect}
        name="num-per-page"
        id="num-per-page"
        defaultValue={'15'}
      >
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="150">150</option>
      </select>
    </div>
  );
};
