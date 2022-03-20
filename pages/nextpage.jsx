import Link from 'next/link';

const NextPage = () => (
    <h1>Hello Next Pages 
        <Link href="/lastpage">
            <a>To Next Page</a>
        </Link>
    </h1>
);
export default NextPage