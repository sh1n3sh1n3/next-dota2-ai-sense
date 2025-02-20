import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export function useAuthUser() {
  const { user } = useAuthContext();

  return { user };
}
