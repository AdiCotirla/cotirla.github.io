import React, { Component } from "react";
import './category.css'
import { Categories } from "./CategoryData";
class Category extends Component {
    render(){
        return (
            <div className="category-container">
                <h1 className="title">SEARCH BY BRANDS</h1>
                <div className="smaller-container">
                {Categories.map((category) => {
                    return (
                        <a href={category.pozitie} className={category.clasa}>
                            <div>
                                <h1 className="h1-category">{category.nume}</h1>
                            </div>
                        </a>
                    )
                })}</div>
            </div>
        )
    }
}

export default Category