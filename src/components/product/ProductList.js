import React from 'react';
import ProductTile from './ProductTile';
import Filters from './Filters';
import NoResults from '../pages/NoResults';
import { watches } from '../../api/watches';

class ProductList extends React.Component {
    constructor() {
        super();

        this.state = {
            watches: [],
            filteredWatches: [],
            filters: {
                case_material: "",
                mechanism: "",
                band_material: ""
            }
        }

        this.displayProductList = this.displayProductList.bind(this);
        this.filterProducts = this.filterProducts.bind(this);
        this.handleAddFilter = this.handleAddFilter.bind(this);
        this.handleRemoveFilter = this.handleRemoveFilter.bind(this);
    }

    displayProductList() {
        const productList = watches.filter(watch => watch.category === this.props.category);
        this.setState({ watches: productList });
    }

    filterProducts() {
        const filters = this.state.filters;
        let filteredWatches = [];
        if (filters.case_material !== "" && filters.mechanism === "" && filters.band_material === "") {
            filteredWatches = this.state.watches.filter(watch => watch.case_material === this.state.filters.case_material);
        } else if (filters.case_material === "" && filters.mechanism !== "" && filters.band_material === "") {
            filteredWatches = this.state.watches.filter(watch => watch.mechanism === this.state.filters.mechanism);
        } else if (filters.case_material === "" && filters.mechanism === "" && filters.band_material !== "") {
            filteredWatches = this.state.watches.filter(watch => watch.band_material === this.state.filters.band_material);
        } else if (filters.case_material !== "" && filters.mechanism !== "" && filters.band_material === "") {
            filteredWatches = this.state.watches.filter(watch => watch.case_material === this.state.filters.case_material && watch.mechanism === this.state.filters.mechanism );
        } else if (filters.case_material !== "" && filters.mechanism === "" && filters.band_material !== "") {
            filteredWatches = this.state.watches.filter(watch => watch.case_material === this.state.filters.case_material && watch.band_material === this.state.filters.band_material );
        } else if (filters.case_material === "" && filters.mechanism !== "" && filters.band_material !== "") {
            filteredWatches = this.state.watches.filter(watch => watch.mechanism === this.state.filters.mechanism && watch.band_material === this.state.filters.band_material );
        } else if (filters.case_material !== "" && filters.mechanism !== "" && filters.band_material !== "") {
            filteredWatches = this.state.watches.filter(watch => watch.case_material === this.state.filters.case_material && watch.mechanism === this.state.filters.mechanism && watch.band_material === this.state.filters.band_material );
        }
        this.setState({filteredWatches});
    }

    handleAddFilter(name, type) {
        let initial = {...this.state.filters};
        initial[type] = name;
        this.setState({ filters: initial }, this.filterProducts);
    }

    handleRemoveFilter(filter) {
        let initial = {...this.state.filters};
        initial[filter] = "";
        this.setState({ filters: initial }, this.filterProducts);
    }

    componentDidMount() {
        if (this.props.category === "all") {
            this.setState({watches})
        } else {
            this.displayProductList();
        }
    }

    render() {
        const hasFilters = (this.props.category === "all" && this.props.limit !== 0);
        const filters = this.state.filters;
        const showWatches = (filters.case_material !== "" || filters.mechanism !== "" || filters.band_material !== "") ? "filteredWatches" : "watches";
        const limit = (this.props.limit > 0) ? this.props.limit : watches.length;
        let hasWatches = this.state[showWatches].length;
        return (
            <div className={hasFilters ? "product-list" : "product-list filters"}>
                {hasFilters ? "" : <Filters
                                        case={this.state.filters.case_material}
                                        mechanism={this.state.filters.mechanism}
                                        band={this.state.filters.band_material}
                                        handleAddFilter={this.handleAddFilter}
                                        handleRemoveFilter={this.handleRemoveFilter}
                                    />}

                {hasWatches ?
                    <div className="product-grid">
                        {this.state[showWatches].slice(0, limit).map(index =>
                            <ProductTile key={index.id} watch={index} />
                        )}
                    </div>
                    :
                    <NoResults />
                }
            </div>
        )
    }
}

export default ProductList;