import { useEffect } from "react";
import Head from "next/head";
import NextLink from "next/link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import {
  Box,
  Card,
  Container,
  Divider,
  Link,
  Checkbox,
  Typography,
} from "@mui/material";
import { GuestGuard } from "../../components/authentication/guest-guard";
import { AuthBanner } from "../../components/authentication/auth-banner";
import { AmplifyLogin } from "../../components/authentication/amplify-login";
import { Auth0Login } from "../../components/authentication/auth0-login";
import { FirebaseLogin } from "../../components/authentication/firebase-login";
import { JWTLogin } from "../../components/authentication/jwt-login";
import { Logo } from "../../components/logo";
import { useAuth } from "../../hooks/use-auth";
import { gtm } from "../../lib/gtm";
import Layout from "./Layout";

const platformIcons = {
  Amplify: "/static/icons/amplify.svg",
  Auth0: "/static/icons/auth0.svg",
  Firebase: "/static/icons/firebase.svg",
  JWT: "/static/icons/jwt.svg",
};

const Login = () => {
  const router = useRouter();
  const { platform } = useAuth();
  const { disableGuard } = router.query;

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          position: "absolute",
          flexDirection: "column",
          minHeight: "100vh",
          width: "full",
          left: "120px",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: "60px",
              md: "120px",
            },
          }}
        >
          <Grid container spacing={2} marginTop={-10}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                  width: "auto",
                }}
              >
                <Card elevation={16} sx={{ p: 4 }}>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      width: "auto",
                    }}
                  >
                    <NextLink href="/" passHref>
                      <a>
                        <Logo
                          sx={{
                            height: 40,
                            width: 40,
                          }}
                        />
                      </a>
                    </NextLink>
                    <Typography variant="h4">Log in</Typography>
                    <Typography
                      color="textSecondary"
                      sx={{ mt: 2 }}
                      variant="body2"
                    >
                      Sign in on the internal platform
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      mt: 3,
                    }}
                  >
                    {/* {platform === "Amplify" && <AmplifyLogin />} */}

                    {/* {platform === "Auth0" && <Auth0Login />} */}

                    {platform === "Firebase" && <FirebaseLogin />}

                    {/* {platform === "JWT" && <JWTLogin />} */}
                    <Checkbox name="policy" />
                    <Typography color="textSecondary" variant="body2">
                      I have read the
                      <Link href="/authentication/terms">
                        Terms and Conditions
                      </Link>
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 3 }} />
                  <NextLink
                    href={
                      disableGuard
                        ? `/authentication/register?disableGuard=${disableGuard}`
                        : "/authentication/register"
                    }
                    passHref
                  >
                    <Link color="textSecondary" variant="body2">
                      Create new account
                    </Link>
                  </NextLink>
                  {platform === "Amplify" && (
                    <NextLink
                      href={
                        disableGuard
                          ? `/authentication/password-recovery?disableGuard=${disableGuard}`
                          : "/authentication/password-recovery"
                      }
                      passHref
                    >
                      <Link
                        color="textSecondary"
                        sx={{ mt: 1 }}
                        variant="body2"
                      >
                        Forgot password
                      </Link>
                    </NextLink>
                  )}
                </Card>
              </Paper>
            </Grid>

            <Grid>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  position: "absolute",
                  left: "160",
                  flexDirection: "column",
                  height: "full",
                  width: "full",
                  backgroundColor: "#5048E5",
                  color: "white",
                }}
              >
                <div className="hidden lg:block relative w-full lg:w-1/2 bg-blue-900">
                  <div
                    className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center"
                    //   style="z-index: 10;"
                  >
                    <img
                      className="lg:max-w-xl mx-auto"
                      src="https://res.cloudinary.com/duuwbcn8o/image/upload/v1669111433/coming_soon_ailths.png"
                    />
                    <div className="align-center">
                      <h2 className="mb-2 text-2xl text-white font-bold">
                        So much more than a business analytics tool
                      </h2>
                    </div>
                    <div className="max-w-lg mx-auto">
                      <p className="mb-6 text-gray-50 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque efficitur nisl sodales egestas lobortis.
                      </p>
                    </div>{" "}
                    <a
                      className="inline-block py-2 px-6 leading-loose rounded-t-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold"
                      href="#"
                    >
                      Get Started
                    </a>{" "}
                    <div className="mt-12 flex justify-center space-x-3">
                      <button className="p-1 bg-green-500 rounded-full"></button>
                      <button className="p-1 bg-green-500 rounded-full"></button>
                      <button className="p-1 bg-white rounded-full"></button>
                      <button className="p-1 bg-green-500 rounded-full"></button>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Login.getLayout = (page) => <GuestGuard>{page}</GuestGuard>;

export default Login;
