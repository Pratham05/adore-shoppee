import React, { useEffect } from 'react';
import styles from './DetailPanel.module.scss';

import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

import { withRouter } from 'react-router-dom'

import Loading from '../../UI/Loading';
import LoadError from '../../UI/LoadError';
import ProductDetails from '../../UI/ProductDetails';

import ImageViewer from '../../UI/ImageViewer';

/**
 * @desc Renders the product detail section for the detail page
 * Accesses redux store for obtaining product details
 * @param {object} props - used for accessing the history prop for routing and the values obtained from store
 */
const DetailPanel = (props) => {
    /**
     * @desc This useeffect works on initial load and only when 
     * the url is changed
     */
    useEffect(()=> {
        let query = new URLSearchParams(props.history.location.search);
        if(query.has('id')) {
            // The Products should now be loaded
            props.loadProduct(query.get('id'));
            
        } else {
            // ID not found, redirect to error page
            props.history.push('/error');
        }  
    }, [props.history.query]);

    // The product detail section
    let renderComp = null;

    //The image section to be displayed on the left
    let imgComp = null;

    if (props.loading) {
        renderComp = <Loading />;
    } else {
        if (props.error) {
            renderComp = <LoadError error={"Unfortunately The Product could not be Loaded!"}/>
        } else {
            renderComp = <ProductDetails 
                            title={props.product.title}
                            price={props.product.price}
                            sku={props.product.sku}
                            description={props.product.description}
                            categories={props.categoryNameString}
                         />;
            imgComp = <div className={styles.DetailPanel__ImageViewer}>
                        <ImageViewer images={props.images}/>
                    </div>;
        }
    }

    return (
        <div className={styles.DetailPanel}>
            {imgComp}
            {renderComp}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        product: state.singleProduct.product,
        loading: state.singleProduct.loading,
        error: state.singleProduct.error,
        images: state.singleProduct.imageSources,
        categoryNameString: state.filter.categoryNameString,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadProduct: (id) => dispatch(actions.loadProduct(id))
    };
};

// Withrouter Gives History props access for routing
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailPanel));
