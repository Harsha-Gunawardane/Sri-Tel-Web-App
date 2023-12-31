import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    Image,
    Box,
    Text,
    Button,
    Checkbox,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";


// import useAuth from "../hooks/useAuth";
// import useInput from "../hooks/useInput";
// import useToggle from "../hooks/useToggle";
// import axios from "../config/axios";

const LOGIN_URL = "/auth";

const Register = () => {
    // const { setAuth } = useAuth();
    // const navigate = useNavigate();
    // const location = useLocation();
    //
    // const from = location.state?.from?.pathname || "/";
    //
    const userRef = useRef();
    const errRef = useRef();
    //
    // const [user, resetUser, userAttribs] = useInput("user", "");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    //
    // useEffect(() => {
    //     userRef.current.focus();
    // }, []);
    //
    // useEffect(() => {
    //     setErrMsg("");
    // }, [user, pwd]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //     try {
    //         const response = await axios.post(
    //             LOGIN_URL,
    //             JSON.stringify({ user, pwd }),
    //             {
    //                 headers: { "Content-Type": "application/json" },
    //                 withCredentials: true,
    //             }
    //         );
    //         console.log(JSON.stringify(response?.data));
    //         const accessToken = response?.data?.accessToken;
    //
    //         setAuth({ user, accessToken });
    //
    //         // resetUser();
    //         setPwd("");
    //
    //         if (from === "/") {
    //             // navigate based on the role
    //             const decoded = jwtDecode(accessToken);
    //             const roles = decoded.UserInfo.roles;
    //
    //             console.log(roles);
    //
    //             if (roles.includes(ROLES.Student)) {
    //                 navigate("/stu/dashboard");
    //             } else if (roles.includes(ROLES.Staff)) {
    //                 navigate("/staff/dashboard");
    //             } else if (roles.includes(ROLES.Tutor)) {
    //                 navigate("/tutor/dashboard");
    //             } else if (roles.includes(ROLES.Admin)) {
    //                 navigate("/admin/dashboard");
    //             } else if (roles.includes(ROLES.Parent)) {
    //                 navigate("/parent/dashboard");
    //             } else if (roles.includes(ROLES.TutorSupportStaff)) {
    //                 navigate("/supportstaff/dashboard");
    //             } else if (roles.includes(ROLES.TutorPaperStaff)) {
    //                 navigate("/paperstaff/dashboard");
    //             }
    //         } else {
    //             navigate(from, { replace: true });
    //         }
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg("No Server Response");
    //         } else if (err.response?.status === 400) {
    //             setErrMsg("Missing Username or Password");
    //         } else if (err.response?.status === 401) {
    //             setErrMsg("Unauthorized");
    //         } else if (err.response?.status === 410) {
    //             setErrMsg("User is not verified");
    //         } else {
    //             setErrMsg("Login Failed");
    //         }
    //         errRef.current.focus();
    //         if (err.response?.status === 410) navigate("/verify");
    //     }
    // };

    return (
        <>

            <Flex gap={25} mt={5} w={"100%"} h="100%" justifyContent="center">
                <Box
                    w={350}
                    mr={{ base: "0px", sm: "0px", md: "0px", lg: "50px", xl: "20px" }}
                    mt={10}
                >
                    <Text
                        textAlign="center"
                        fontWeight="semibold"
                        fontStyle="Roboto"
                        color="#333333"
                        fontSize={32}
                        mb={7}
                    >
                        Register to Sri Tel
                    </Text>
                    <Box>
                        <Alert
                            borderRadius={8}
                            mb={3}
                            status="error"
                            ref={errRef}
                            display={errMsg ? "flex" : "none"}
                        >
                            <AlertIcon />
                            <AlertTitle fontSize={16}>Login failed</AlertTitle>
                            <AlertDescription fontSize={15}>{errMsg}</AlertDescription>
                        </Alert>
                        <form >
                            <FormControl>
                                <FormLabel
                                    fontSize={16}
                                    color="#555555"
                                    fontWeight="regular"
                                    fontStyle="Roboto"
                                    htmlFor="username"
                                >
                                    Username or email address:
                                </FormLabel>
                                <Input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    // onChange={(e) => setUser(e.target.value)}
                                    // value={user}
                                    mb={4}
                                    h={9}
                                    bg="#eeeeee"
                                    border="none"
                                    placeholder="Enter username or email address"
                                    fontSize={14}
                                />
                                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                                <FormLabel
                                    htmlFor="password"
                                    color="#555555"
                                    fontSize={16}
                                    fontWeight="regular"
                                    fontStyle="Roboto"
                                >
                                    Password :
                                </FormLabel>
                                <Input
                                    mb={4}
                                    h={9}
                                    bg="#eeeeee"
                                    border="none"
                                    placeholder="Enter password"
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    fontSize={14}
                                />

                                <Flex justifyContent="center" >
                                    <Button
                                        w={"100%"}
                                        h={10}
                                        bg="#0074D9"
                                        color="#ffffff"
                                        _hover={{
                                            color: "#0074D9",
                                            bg: "white",
                                            border: "0.5px solid #0074D9",
                                        }}
                                        fontSize={19}
                                        borderRadius={6}
                                        fontWeight={"medium"}
                                        type="submit"
                                    >
                                        Sign Up
                                    </Button>
                                </Flex>
                                <Flex
                                    gap={2}
                                    mt={5}
                                    justifyContent="center"
                                    display={{
                                        base: "flex",
                                        sm: "none",
                                        md: "none",
                                        lg: "none",
                                        xl: "none",
                                    }}
                                >
                                    <Text fontSize={14}>Do you haven't register yet?</Text>
                                    <Link to="/register">
                                        <Text
                                            color="032068"
                                            fontSize={14}
                                            fontWeight="semibold"
                                            _hover={{ textDecoration: "underline" }}
                                        >
                                            Sign Up
                                        </Text>
                                    </Link>
                                </Flex>
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </>
    );
};

export default Register;
