import {useRouter} from "next/router";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  background-color: red;
  
  .barev {
    color: blue;
  }
`;

const list = {
    46: 'helllloooo'
}

export async function getServerSideProps(context) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);

    return {
        // will be passed to the page component as props
        props: {
            item: res.data
        },
    }
}

const Post = ({item}) => {
    const route = useRouter();
    console.log(item)
    return (
        <Wrapper>
        <Head>
            <title>barev {item?.name}</title>
        </Head>
        <h1>
            barev {item?.name}
        </h1>
        </Wrapper>
    );
};

export default Post;
