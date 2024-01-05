import Data from '@/public/data/manga.json'
import Draft from '@/public/data/draft.json'
import Image from 'next/image'


export default function Scanner(props: any) {
    const selectedManga = Data.find((data: any) => data.id === props.manga);
    const selectedChapter = selectedManga?.chapters.find((data: any) => data.id === props.chapter);
    const draftManga = Draft.find((data: any) => data.id === props.manga);
    const draftChapter = draftManga?.chapters.find((data: any) => data.id === props.chapter);

    const handleLoad = async () => {
        const formData = new FormData();
        formData.append('manga', selectedManga?.id || '');
        formData.append('chapters', selectedChapter?.id || '');
        formData.append('name', selectedManga?.name || '');
        formData.append('number', selectedChapter?.number || '');
        formData.append('title', selectedChapter?.title || '');
        const response = await fetch('/api/scanner', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            alert(`${selectedChapter?.number} - ${selectedChapter?.title || 'no title'} Drafted`)
        }
    }
    const handlePublish = async () => {
        const formData = new FormData();
        formData.append('manga', draftManga?.id || '');
        formData.append('chapters', draftChapter?.id || '');

        const response = await fetch('/api/publish', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            alert(`${selectedChapter?.number} - ${selectedChapter?.title || 'no title'} publised`);
        }
    }
    return (
            <div className="w-full bg-sky-300 p-[10px] flex items-center justify-between">
                <h1>Publish {selectedChapter?.number} - {selectedChapter?.title || 'no title'}</h1>
                <button onClick={handleLoad}>Reload</button>
                <button onClick={handlePublish}>Upload</button>
            </div>
    )
}