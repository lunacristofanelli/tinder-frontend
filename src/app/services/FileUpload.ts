import axios from "axios";

const url = 'https://api.imgbb.com/1/upload';
const key = '8329770558ea09d562268e4d75515974';

export async function uploadFile(file: any) {
    const formBody = new FormData();
    formBody.set('key', key)
    formBody.append('image', file);
    return await axios({
        method: 'post',
        url: url,
        data: formBody
    });
}