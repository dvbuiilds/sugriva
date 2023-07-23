export const USER_SET_LOGGED_IN = 'USER_SET_LOGGED_IN';
export const USER_SET_ROLE = 'USER_SET_ROLE';
export const USER_SET_FIRST_NAME = 'USER_SET_FIRST_NAME';
export const USER_SET_LAST_NAME = 'USER_SET_LAST_NAME';
export const USER_SET_USER_NAME = 'USER_SET_USER_NAME';
export const USER_SET_EMAIL = 'USER_SET_EMAIL';
export const USER_SET_ID = 'USER_SET_ID';
export const USER_SET_AUTHTOKEN = 'USER_SET_AUTHTOKEN';
export const USER_SET_MEETING_CODE = 'USER_SET_MEETING_CODE';
export const USER_SET_PROFILE_SUBMITTED = 'USER_SET_PROFILE_SUBMITTED';

export const setUserLoggedIn = (status) => {
    return{
        type: USER_SET_LOGGED_IN,
        status,
    };
};

export const setUserRole = (role) => {
    return {
        type: USER_SET_ROLE,
        role,
    };
};

export const setFirstName = (name) => {
    return {
        type: USER_SET_FIRST_NAME,
        name,
    };
};

export const setLastName = (name) => {
    return {
        type: USER_SET_LAST_NAME,
        name,
    };
};

export const setUserName = (name) => {
    return {
        type: USER_SET_USER_NAME,
        name,
    };
};

export const setUserEmail = (email) => {
    return {
        type: USER_SET_EMAIL,
        email,
    };
};

export const setUserId = (id) => {
    return {
        type: USER_SET_ID,
        id,
    };
};

export const setAuthToken = (authToken) => {
    return {
        type: USER_SET_AUTHTOKEN,
        authToken,
    };
};

export const setMeetingActive = (code) => {
    return {
        type: USER_SET_MEETING_CODE,
        code
    };
};

export const setProfileSubmitted = (status) => {
    return {
        type: USER_SET_PROFILE_SUBMITTED,
        status
    };
};