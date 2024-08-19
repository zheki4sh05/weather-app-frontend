const { default: MorePage } = require("@/components/morePage/MorePage");

async function MoreWeatherInfo({searchParams}) {
    return (
        <MorePage searchParams={searchParams} currentPage="/profile" />
    );
}

export default MoreWeatherInfo;