import './Folder.scss';
import { useState } from 'react';

const Folder = (props) => {
  const { data } = props;

  const [expand, setExpand] = useState(false);

  if (!data.isFolder) {
    return <div>{data.name}</div>;
  } else {
    return (
      <main>
        <div onClick={() => setExpand(!expand)} className='folder'>
          {data.name}
        </div>

        <div style={{ display: expand ? 'block' : 'none' }}>
          {data.items.map((d) => {
            return (
              <div className='item'>
                <Folder data={d} />
              </div>
            );
          })}
        </div>
      </main>
    );
  }
};

export { Folder };
