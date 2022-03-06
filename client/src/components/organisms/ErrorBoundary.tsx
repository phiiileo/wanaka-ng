import React, { Component, ReactNode } from 'react';
// import * as Sentry from '@sentry/browser';
import styled from '@emotion/styled/macro';
import { Button } from './..';
// import { Typography, Button } from 'components/atoms';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }: { theme: any }) => theme.colors.white};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;

const Title = styled.h1`
  color: ${({ theme }: { theme: any }) => theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: ${({ theme }: { theme: any }) => theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // Sentry.withScope(scope => {
    //   scope.setExtras(errorInfo);
    //   Sentry.captureException(error);
    // });
  }

  reloadPage = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Wrapper>
          <Content>
            <Title>Something went wrong</Title>
            <Subtitle>We&apos;re really sorry about this, please reload the page.</Subtitle>
            <Button size="sm" onClick={this.reloadPage}>
              Reload
            </Button>
          </Content>
        </Wrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
