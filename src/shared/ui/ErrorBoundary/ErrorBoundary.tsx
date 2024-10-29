import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorPage } from "@/pages";

interface ErrorBoundaryPropsTypes {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryStateTypes {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryPropsTypes,
  ErrorBoundaryStateTypes
> {
  constructor(props: ErrorBoundaryPropsTypes) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ? this.props.fallback : <ErrorPage message={this.state.error?.message} />;
    }

    return this.props.children;
  }
}