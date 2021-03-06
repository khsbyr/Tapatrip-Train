import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AuthTokenStorageService from '@services/AuthTokenStorageService';

const httpLink = createHttpLink({
  uri: process.env.BASE_GRAPHQL_HOST,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    AuthTokenStorageService.getAccessToken() &&
    AuthTokenStorageService.getAccessToken() != 'false'
      ? AuthTokenStorageService.getAccessToken()
      : AuthTokenStorageService.getGuestToken();

  const locale =
    AuthTokenStorageService.getLocale() &&
    AuthTokenStorageService.getLocale() != 'false'
      ? AuthTokenStorageService.getLocale()
      : 'mn';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      authorization:
        headers && headers.userToken
          ? `Bearer ${headers.userToken}`
          : token
          ? `Bearer ${token}`
          : '',
      'Accept-Language':
        headers && headers.locale
          ? `${headers.locale}`
          : locale
          ? locale
          : 'mn',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
