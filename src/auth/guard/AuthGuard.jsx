import { useEffect } from "react";
import useRouter from "../../routes/hooks/useRouter";
import { paths } from "../../routes/paths";

const AuthGuard = ({ children }) => {
  const token = localStorage.getItem("token");

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push(paths.auth.login);
    }
  }, [router, token]);

  return children;
};

export default AuthGuard;
