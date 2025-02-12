import { memo } from "react";

const Search = (props) => {
    const { onChange } = props;
    console.log('Search Rendered!');
    
    return (
        <input type="text" placeholder="Search users..." onChange={(e) => onChange(e.target.value)}/>
    )
};

export default memo(Search);