import React from "react";
import { Menu, List, Segment, Card } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../Search/Search.js"

const Categories = (props) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.swotReducer.categories);
    const displayCategories = useSelector((state) => state.swotReducer.displayCategories);

    return (
        <>
            <Segment style={{ maxHeight: 200 }}>
                <Menu align="center" style={{ maxHeight: 120, overflow: "auto" }} size="mini" vertical>
                    <Search></Search>
                    <List as="ul" style={{ "margin-left": 0 }}>
                        {   displayCategories.map((category) =>
                                <Card style={{ "margin-top":10, "margin-bottom": 10, maxWidth: 75 }} raised="true"><List.Item name="category" draggable >{category}</List.Item></Card>
                            )
                        }
                    </List>
                </Menu>
            </Segment>
        </>
      );
};

export default Categories;
