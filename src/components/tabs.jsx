import React, { useMemo } from 'react';

const Tabs = (props) => {
    const { items } = props;
    const item = useMemo(() => ({name, id}) => <li key={id} id={id}>{name}</li>)
    return (
        <ul className="menu">
            {items.map(i => item(i))}
        </ul>
    )
  }

  export default Tabs;