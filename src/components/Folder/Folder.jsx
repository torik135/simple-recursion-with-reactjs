import './index.scss';
import { useState } from 'react';

const Folder = (props) => {
  const { data } = props;

  const [expand, setExpand] = useState(false);

  if (data.isFolder) {
    return (
      <main>
        <div onClick={() => setExpand(!expand)} className='folder'>
          {data.name}
        </div>

        <div style={{ display: expand ? 'block' : 'none' }} className='item'>
          {data.items.map((d) => {
            return <Folder data={d} />;
          })}
        </div>
      </main>
    );
  } else {
    return <div>{data.name}</div>;
  }
};

export { Folder };
