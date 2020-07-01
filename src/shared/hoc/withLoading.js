import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

const withLoading = (WrappedComponent) => {
    class HOC extends React.Component {
        render() {
            const { loading, ...passedThroughProps } = this.props;
            if(loading) {
                return <LoadingSpinner />
            }
            return (
                <WrappedComponent {...passedThroughProps} />
            )
        }
    }
    return HOC;
}

export default withLoading;