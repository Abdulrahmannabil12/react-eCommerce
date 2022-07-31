import React from 'react' 
 import CollectionPreview from '../../components/collection-overview/collections-overview.component.jsx'
import { selectShopCollections } from '../../Redux/shop/shop.selectors';
import { connect } from 'react-redux';

const ShopPage = ({ collections })=> {
 
 
     return (
      <>
        {collections.map(({ id, ...collection }) => <CollectionPreview key={id}  {...collection}/>)}
      </>
    )
  }
 
const mapStateToProps=(state)=>{
  return {
    collections:selectShopCollections(state)
  }
}
export default connect(mapStateToProps)(ShopPage);
