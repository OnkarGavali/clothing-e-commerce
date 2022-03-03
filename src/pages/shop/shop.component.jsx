import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utlis"
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";



const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//we get accese of match, histoy from route /shop defination in app.js
class ShopPage extends React.Component {
    // constructor(){
    //     super();
    //     this.state ={ 
    //         loading : true
    //     }
    // }
    // we an directy use stste without written constructor 
    // react will directly handle super and constructor it for us
    state = {
        loading : true
    }
    unsubscribeFromSnapshot  = null ;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot =  collectionRef.onSnapshot( async snapshot => {
            //console.log(snapshot);
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            //console.log(collectionMap)
            updateCollections(collectionMap)
            this.setState({loading: false});
        })
        
    }
    render(){
        const {match} = this.props;
        const { loading } = this.state;
        return(
            <div className='shop-page'>
                {/* <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> */}

                <Route exact path={`${match.path}`} render={ props => (
                    <CollectionOverviewWithSpinner isLoading={loading} {...props}/>
                )}/>
                <Route path={`${match.path}/:collectionId`} render={props => (
                    <CollectionPageWithSpinner isLoading={loading} {...props}/>
                )}/>
                {/* here we re using render to send 
                loading paramenter and props for match 
                and histroy paramenter of reacte router 
                which we have to explicity send when we are using render */}
            </div>
        )
    }
    
}


const mapDispatchToProps = dispatch =>({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps )(ShopPage);