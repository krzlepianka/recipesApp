import React from 'react';
import FetchError from '../FetchError/';

const withHandleError = (WrappedComponent) => {
    class HOC extends React.Component {
        render() {
            const { error, ...passedThroughProps } = this.props;
            if(error) {
                return <FetchError />
            }
            return (
                <WrappedComponent {...passedThroughProps} />
            )
        }
    }
    return HOC;
};
 
export default withHandleError;
