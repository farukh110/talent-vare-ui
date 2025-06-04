import { Calendar, ConfigProvider, theme } from 'antd';

const CustomCalendar = (props) => {

    const { token } = theme.useToken();

    const wrapperStyle = {
        width: `100%`,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#0154aa',
                        colorBgContainer: '#ffffff',
                        colorBorderSecondary: '#ffffff',
                    },
                }}
            >
                <div style={wrapperStyle}>
                    <Calendar {...props} />
                </div>
            </ConfigProvider>
        </>
    );
};

export default CustomCalendar;
