import React from 'react';
import { render } from 'react-dom';
import App from '../dist';
import { Text } from '@preply/ui';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

render(
    <ErrorBoundary>
        <App />
        <Text>Use this chat to communicate during and between lessons</Text>
    </ErrorBoundary>,
    document.getElementById('root'),
);
