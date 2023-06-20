import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const { post } = props;
    const { categories } = props;
    console.log(categories);
    const {data, setData, put} = useForm({
        title: post.title,
        body: post.body,
        category_id: post.category_id
    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
                </h2>
            }>

            <div className="p-12">

                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2>Title</h2>

                        <input type="text" placeholder="タイトル" value={data.title} onChange={(e) => setData("title", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>
                    </div>

                    <div>
                        <h2>Body</h2>
                        <textarea placeholder="今日も1日お疲れさまでした。" value={data.body} onChange={(e) => setData("body", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.body}</span>
                    </div>

                    <div>
                        <h2>Category</h2>
                        <select value={data.category_id} onChange={e => setData("category_id", e.target.value)}>
                            {categories.map((category) => (
                                <option value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>

                <Link href="/posts">戻る</Link>
            </div>

        </Authenticated>
        );
}

export default Edit;
