import { ChangeEventHandler } from 'react';

type Props = {
  yearFilterText: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

const Filter: React.FC<Props> = ({ yearFilterText, onChange }) => {
  return (
    <div className="level-right is-one-fifth is-size-5 field">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Filter by year"
          value={yearFilterText}
          onChange={onChange}
          onWheel={(e) => {
            (e.target as HTMLElement).blur();
            setTimeout(function () {
              (e.target as HTMLElement).focus();
            }, 10);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
