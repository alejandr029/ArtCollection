<script>
    import { onMount } from 'svelte';
    import { ArtGet } from '../Service/ArtService';


    
    let items = [];
    onMount(async () => {
        const data = await ArtGet();
        
        items = data.data;
    });
    

</script>


<div class="w-full flex justify-center bg-amber-100 py-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto">
    {#each items as item }
        <a href="/Art/{item.id}" class="no-underline w-94">
            <div class=" flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg h-[50vh]">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <picture class="aspect-square w-24 overflow-hidden">
                        <img src='https://www.artic.edu/iiif/2/{item.image_id}/full/843,/0/default.jpg' alt={item.title} 
                        class="w-full h-full object-cover"  />
                    </picture> 
                </div>
                <div class="p-4">
                <div class="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-auto text-center">
                    {item.artwork_type_title}
                </div>
                <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                    {item.title}
                </h6>
                <p class="text-slate-600 leading-normal font-light">
                    {item.medium_display}
                </p>
                </div>
            
                <div class="flex items-center justify-between p-4">
                <div class="flex items-center">
                    <div class="flex flex-col ml-3 text-sm">
                    <span class="text-slate-800 font-semibold">
                        {item.artist_display}
                    </span>
                    <span class="text-slate-600">
                        from {item.date_start} to {item.date_end}
                    </span>
                    </div>
                </div>
                </div>
            </div> 
        </a>
    {/each}
    </div>
</div>