import { useParams, Link } from "react-router-dom";
import Header from "./../../Header/Header.jsx";
import { currentPosts } from "./Blog.jsx";

const BlogPostDetail = () => {
    const { postId } = useParams(); // Получаем ID поста из URL

    // Загружаем пост по ID
    // useEffect(() => {
    //     const fetchPost = async () => {
    //         try {
    //             const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/past_posts/${postId}`);
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             const data = await response.json();
    //             setPost(data);
    //         } catch (error) {
    //             console.error("Error fetching post:", error);
    //         }
    //     };
    //     fetchPost();
    // }, [postId]);

    // const fetchTranslation = useCallback(async (postId, language) => {
    //     try {
    //         const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/translations/post_translations/${postId}/${language}`);
    //         console.log(`${process.env.REACT_APP_SERVER_URL}/api/translations/post_translations/${postId}/${language}`);
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         console.log("Translation data:", data);
    //         return data;
    //     } catch (error) {
    //         console.error("Error fetching translation:", error);
    //     }
    // }, [i18n.language]);

    // Загружаем перевод при изменении поста или языка
    // useEffect(() => {
    //     if (post) {
    //         const loadTranslation = async () => {
    //             const data = await fetchTranslation(postId, i18n.language); // Передаем язык
    //             setTranslation(data);
    //         };
    //         loadTranslation();
    //     }
    // }, [post, postId, i18n.language, fetchTranslation]);


    const post = currentPosts.find((item) => item.id === parseInt(postId, 10));

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <div className="w-full mt-10">
                <div className="flex bg-white" style={{ height: '600px' }}>
                    <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl"><span className="text-indigo-600">
                                {post.title}
                            </span></h2>
                            <p className="mt-2 text-sm text-gray-500 md:text-base">
                                {post.description}
                            </p>
                            <div className="flex justify-center lg:justify-start mt-6">
                                <Link to="/" className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800">
                                    Қайтып келу
                                </Link>
                                <Link to={"/"} className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">
                                    Толығырақ оқыңыз
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
                        <div className="h-full object-cover" style={{
                            backgroundImage: `url(${post.image_url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                        }}>
                            <div className="h-full bg-black opacity-25"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostDetail;
