import React, { useEffect } from 'react';
import styles from './DetailPanel.module.scss';

import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

import { withRouter } from 'react-router-dom'

import Loading from '../../UI/Loading';
import LoadError from '../../UI/LoadError';
import ProductDetails from '../../UI/ProductDetails';

import ImageViewer from '../../UI/ImageViewer';

const DetailPanel = (props) => {

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

    let renderComp = null;

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailPanel));
