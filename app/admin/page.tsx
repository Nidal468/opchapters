'use client'

import themes from "@/style/themes.module.css"
import Data from '@/public/data/manga.json'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Batch } from "@/components/uploads/batch/page";
import Folders from '@/components/scanner/page'
import { generateToken } from '@/components/token/page'
import EditIcon from '@mui/icons-material/Edit';


export default function Upload() {
    const [selectedId, setSelectedId] = useState('');
    const [isSelectedChapter, setSelectedChapter] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [author, setAuthor] = useState('');
    const [synopsis, setsynopsis] = useState('');
    const [info, setInfo] = useState('');
    const [genre1, setGenre1] = useState('');
    const [genre2, setGenre2] = useState('');
    const [genre3, setGenre3] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [chapterNumber, setChapterNumber] = useState('');
    const [chapterTitle, setChapterTitle] = useState('');
    const [active, setActive] = useState('');
    const selectedManga = Data.find((data: any) => data.id === selectedId);
    const selectedChapter = selectedManga?.chapters.find((data: any) => data.id === isSelectedChapter)
    const [key, setKey] = useState('')
    const [state, setState] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            setFile(selectedFile);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    const addManga = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) return alert('fill the form first')

        const currentDate = new Date();
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(currentDate);
        const filename = file.name
        const data = new FormData();
        data.append('file', file);
        data.append('id', generateToken(30));
        data.append('name', name);
        data.append('date', formattedDate);
        data.append('author', author);
        data.append('info', info);
        data.append('synopsis', synopsis);
        data.append('genre1', genre1);
        data.append('genre2', genre2);
        data.append('genre3', genre3);
        data.append('totalViews', '0');
        data.append('cover', `/images/cover/${filename}`);
        data.append('chapters', [] as unknown as string);
        try {
            const response = await fetch("/api/addManga", {
                method: 'POST',
                body: data,
            });
            if (response.ok) {
                alert(`${name} has been added`)
            }
        } catch (error) {
            console.error("Error occurred", error);
        }
    }
    const handleAddChapter = async () => {
        const currentDate = new Date();
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(currentDate);
        const newChapter = {
            id: generateToken(30),
            number: chapterNumber,
            title: chapterTitle,
            date: formattedDate,
            index: selectedId,
            name: selectedManga?.name,
            images: [],
            viewed: []
        };

        try {
            const response = await fetch('/api/addChapter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newChapter),
            });

            if (response.ok) {
                console.log('Chapter added successfully');
            } else {
                console.error('Failed to add chapter');
            }
        } catch (error) {
            console.error('Error adding chapter:', error);
        }
        setChapterNumber('');
        setChapterTitle('');
    };

    const handleDeleteChapter = async (chapter: any, manga: any) => {
        const body = {
            chapter: chapter,
            manga: manga
        }
        try {
            const response = await fetch(`/api/deleteChapter`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                console.log('Chapter deleted successfully');
                // You might want to update your local state or trigger a re-fetch here
            } else {
                console.error('Failed to delete chapter');
            }
        } catch (error) {
            console.error('Error deleting chapter:', error);
        }
    };
    const reloadManga = async () => {

        const response = await fetch('/api/reloadManga', {
            method: 'POST'
        })
        if (response.ok) {
            alert('reloaded');
        }
    }
    const reloadChapter = async () => {
        const formData = new FormData();
        formData.append('manga', selectedManga?.id || '');

        const response = await fetch('/api/reloadChapter', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            alert('reloaded');
        }
    }
    const editManga = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const filename = file?.name || ''
        const data = new FormData();
        data.append('file', file || '');
        data.append('id', selectedManga?.id as string);
        data.append('name', name);
        data.append('author', author);
        data.append('info', info);
        data.append('synopsis', synopsis);
        data.append('genre1', genre1);
        data.append('genre2', genre2);
        data.append('genre3', genre3);
        data.append('cover', `/images/cover/${filename}`);
        try {
            const response = await fetch("/api/addManga", {
                method: 'POST',
                body: data,
            });
            if (response.ok) {
                alert(`${name} has been edited`)
            }
        } catch (error) {
            console.error("Error occurred", error);
        }
    }

    return (key === "y0DrBAtQCak34cXhq9H9OOyj83SwyQ99ztpU0Wal2B8YSAVhVpQ8bXl706fBFMrm1zv9iWwrGbDptvA8zHFOUvKxOcwqJZQSwPowuhcj3P7sb43oYvZjoW6J" ? <div className="xl:w-[1280px] w-full min-h-[100vh] font-light flex items-start justify-start gap-[4vw] lg:gap-[10px] text-white" id={themes.body}>
        <div className="w-[20%] h-full flex flex-col items-start justify-start" id={themes.box}>
            <div className="w-full h-[40px] bg-zinc-900 flex items-center justify-between px-[10px] text-[10px]">
                <h1>Add new manga here</h1>
                <button className="w-[60px] h-[20px] flex items-center justify-center rounded-[2px] font-medium text-[8px]" onClick={reloadManga} id={themes.button}>Reload</button>
                <button className="w-[60px] h-[20px] flex items-center justify-center rounded-[2px] font-medium text-[8px]" onClick={() => setActive('manga')} id={themes.button}>Add Manga</button>
            </div>
            <div className="w-full h-full overflow-y-auto">
                {Data.map((data: any) => (
                    <div className="w-full h-[100px] bg-zinc-900 flex items-start justify-start gap-[10px] hover:bg-opacity-60 duration-300 shadow-md my-[5px]" key={data.id} onClick={() => setSelectedId(data.id)}>
                        <img className="w-[70px] h-full" src={data.cover} />
                        <div className="flex flex-col gap-[10px] text-white text-[10px] py-[10px]">
                            <div className="flex gap-[10px]"><h1>{data.name}</h1><EditIcon sx={{ fontSize: "15px" }} onClick={() => setActive('edit')} /></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-[20%] h-full flex flex-col items-start justify-start gap-[10px]" id={themes.box}>
            <div className="w-full h-[40px] bg-zinc-900 flex items-center justify-between px-[10px] text-[10px]">
                <h1>Add new chapter here</h1>
                <button className="w-[60px] h-[20px] flex items-center justify-center rounded-[2px] font-medium text-[8px]" onClick={reloadChapter} id={themes.button}>Reload</button>
                <button className="w-[60px] h-[20px] flex items-center justify-center rounded-[2px] font-medium text-[8px]" onClick={() => setActive('chapter')} id={themes.button}>Add Chapter</button>
            </div>
            <div className="w-full flex items-center justify-between px-[10px] py-[10px] text-[10px] bg-zinc-900">
                <h1>Chapter/Volumes of</h1>
                <h1>{selectedManga?.name}</h1>
            </div>
            <div className="w-full h-full overflow-y-auto">
                {selectedManga && selectedManga?.chapters.map((data: any) => (
                    <div className="w-full h-[35px] bg-zinc-600 flex items-center justify-between px-[10px] text-[8px] mb-[5px] hover:bg-opacity-60 duration-300 shadow-md" key={data.id} onClick={() => { setSelectedChapter(data.id), setActive('page') }}>
                        <h1>{data.number}</h1>
                        <h1>{data.title}</h1>
                        <div onClick={() => handleDeleteChapter({ chapter: data.id }, { manga: selectedManga?.id })}><DeleteIcon sx={{ fontSize: "15px" }} /></div>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-[58%] h-full" id={themes.box}>
            {active === 'manga' && <form className="w-full h-full flex items-start justify-start gap-[10px]" onSubmit={addManga}>
                <div className="w-[60%] h-full flex flex-col gap-[10px] text-[10px] items-center justify-start">
                    <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                        <label>Manga Name</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                            placeholder='Enter manga name'
                        />
                    </div>
                    <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                        <label>Manga author name</label>
                        <input
                            type='text'
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                            placeholder='Enter manga author name'
                        />
                    </div>
                    <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                        <label>Manga synopsis for slider (keep it short)</label>
                        <textarea
                            value={synopsis}
                            onChange={(e) => setsynopsis(e.target.value)}
                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw] outline-0'
                            placeholder='Enter manga synopsis'
                        />
                    </div>
                    <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                        <label>Manga description</label>
                        <textarea
                            value={info}
                            onChange={(e) => setInfo(e.target.value)}
                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw] outline-0'
                            placeholder='Enter manga description'
                        />
                    </div>
                    <div className='w-full flex flex-col items-start justify-center gap-[1vw] p-[1vw] bg-zinc-700'>
                        <label className='text-white'>Manga Genre(Genre 1 will be the main genre!)</label>
                        <div className='w-full flex items-center justify-evenly gap-[1vw] text-[0.8vw]'>
                            <input
                                type='text'
                                value={genre1}
                                onChange={(e) => setGenre1(e.target.value)}
                                className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                placeholder='Enter manga genre 1'
                            />
                            <input
                                type='text'
                                value={genre2}
                                onChange={(e) => setGenre2(e.target.value)}
                                className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                placeholder='Enter manga genre 2'
                            />
                            <input
                                type='text'
                                value={genre3}
                                onChange={(e) => setGenre3(e.target.value)}
                                className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                placeholder='Enter manga genre 3'
                            />
                        </div>
                    </div>
                    <input
                        type='submit'
                        className='w-[80%] px-[10px] h-[30px] bg-sky-500 text-white rounded hover:bg-zinc-700'
                    />
                </div>
                <div className="h-[80%] flex flex-col items-start justify-start">
                    <img src={imagePreview || '/images/cover/borutoCover.jpg'} alt={`${imagePreview}`} className="w-[200px] h-[300px] relative border-2 border-zinc-400 rounded-[4px] border-dashed" />
                    <input type="file" placeholder="Upload Cover" onChange={handleFileChange} className="w-full text-[10px]" />
                </div>
            </form>}
            {active === 'chapter' && <form>
                <div className='w-full flex flex-col items-start justify-start p-[1vw] gap-[1vw]'>
                    <label>Chapter Name</label>
                    <input
                        type='text'
                        value={chapterTitle}
                        onChange={(e) => setChapterTitle(e.target.value)}
                        className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                        placeholder='Enter chapter title'
                    />
                </div>
                <div className='w-full flex flex-col items-start justify-start p-[1vw] gap-[1vw]'>
                    <label>Write volume for volume and chapter for chapter then the number of it</label>
                    <input
                        type='text'
                        value={chapterNumber}
                        onChange={(e) => setChapterNumber(e.target.value)}
                        className='w-full px-3 py-2 rounded bg-zinc-700 text-white'
                        placeholder='example Volume 1 or Chapter 1 "dont forget the space"'
                    />
                </div>
                <div className='w-full flex items-center justify-center'>
                    <button
                        type='button'
                        onClick={handleAddChapter}
                        className='px-4 py-2 bg-zinc-600 text-white text-[1vw] rounded-[0.2vw] hover:bg-zinc-700'
                    >
                        Add Chapter
                    </button>
                </div>
            </form>}
            {active === 'page' && <div className="w-full flex flex-col gap-[10px]"><Batch manga={selectedManga?.id} chapter={selectedChapter?.id} /><Folders manga={selectedManga?.id} chapter={selectedChapter?.id} name={selectedManga?.name} number={selectedChapter?.number} /></div>}
            {active === 'edit' && <form className="w-full h-full flex items-start justify-start gap-[10px]" onSubmit={editManga}>
                <div className="w-[60%] h-full flex flex-col gap-[10px] text-[10px] items-center justify-start">
                    <h1>Edit {selectedManga?.name}</h1>
                    <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                        <label>Manga Name</label>
                        <input
                            type='text'
                            value={selectedManga?.name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                            placeholder={name}
                        />
                    </div>
                    <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                        <label>Manga author name</label>
                        <input
                            type='text'
                            value={selectedManga?.author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                            placeholder={author}
                        />
                    </div>
                    <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                        <label>Manga synopsis for slider (keep it short)</label>
                        <textarea
                            value={selectedManga?.synopsis}
                            onChange={(e) => setsynopsis(e.target.value)}
                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw] outline-0'
                            placeholder={synopsis}
                        />
                    </div>
                    <div className='w-full bg-zinc-700 p-[1vw] flex flex-col items-start justify-center gap-[1vw]'>
                        <label>Manga description</label>
                        <textarea
                            value={selectedManga?.info}
                            onChange={(e) => setInfo(e.target.value)}
                            className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw] outline-0'
                            placeholder={info}
                        />
                    </div>
                    <div className='w-full flex flex-col items-start justify-center gap-[1vw] p-[1vw] bg-zinc-700'>
                        <label className='text-white'>Manga Genre(Genre 1 will be the main genre!)</label>
                        <div className='w-full flex items-center justify-evenly gap-[1vw] text-[0.8vw]'>
                            <input
                                type='text'
                                value={selectedManga?.genre1}
                                onChange={(e) => setGenre1(e.target.value)}
                                className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                placeholder={genre1}
                            />
                            <input
                                type='text'
                                value={selectedManga?.genre2}
                                onChange={(e) => setGenre2(e.target.value)}
                                className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                placeholder={genre2}
                            />
                            <input
                                type='text'
                                value={selectedManga?.genre3}
                                onChange={(e) => setGenre3(e.target.value)}
                                className='w-full text-white bg-zinc-600 p-[0.5vw] rounded-[0.3vw]'
                                placeholder={genre3}
                            />
                        </div>
                    </div>
                    <input
                        type='submit'
                        className='w-[80%] px-[10px] h-[30px] bg-sky-500 text-white rounded hover:bg-zinc-700'
                    />
                </div>
                <div className="h-[80%] flex flex-col items-start justify-start">
                    <img src={imagePreview} alt={imagePreview} className="w-[200px] h-[300px] relative border-2 border-zinc-400 rounded-[4px] border-dashed" />
                    <input type="file" placeholder="Upload Cover" onChange={(e) => setImagePreview(selectedManga?.cover || '')} className="w-full text-[10px]" />
                </div>
            </form>}
        </div>
    </div> : <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
        <input type="password" placeholder="enter token" className="w-[60%] h-[4vw] bg-zinc-600 text-white px-[2vw]" onChange={(e) => setKey(e.target.value)} />
    </div>
    )
}
