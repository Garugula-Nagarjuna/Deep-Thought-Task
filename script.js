function toggleBoard(boardId) {
    const board = document.getElementById(boardId);
    const isVisible = board.style.transform === 'translateX(0%)';

    if (isVisible) {
        board.style.transform = boardId === 'journey-board' ? 'translateX(-200px)' : 'translateX(200px)';
    } else {
        board.style.transform = 'translateX(0%)';
    }
}
// Simulating the task data fetched from an API
const taskData = {
    "task_id": 18882,
    "task_title": "Explore the world of management",
    "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
    "status": "notworkyet",
    "assets": [
        {
            "asset_id": 18883,
            "asset_title": "Technical Project Management",
            "asset_description": "Story of Alignment\nScope of Agility\nSpecific Accountable\nStaggering Approach",
            "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
            "asset_type": "display_asset",
            "asset_content_type": "video"
        },
        {
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": "",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
        },
        {
            "asset_id": 18885,
            "asset_title": "Structure you pointers ",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": "",
            "asset_type": "input_asset",
            "asset_content_type": "article"
        },
        {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
        }
    ]
};

// Fetch the task data (Simulating an API request)
function fetchTaskData() {
    return new Promise((resolve, reject) => {
        // Simulating a delay like an API request
        setTimeout(() => {
            resolve(taskData);
        }, 1000);
    });
}

// Create asset container based on asset type
function createAssetContainer(asset) {
    let assetHTML = ''; 

    if (asset.asset_content_type === 'video') {
        assetHTML = `
            <div class="asset">
                <p>Asset Title: ${asset.asset_title}</p>
                <p>Description: ${asset.asset_description}</p>
                <iframe src="${asset.asset_content}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
    } else if (asset.asset_content_type === 'article') {
        assetHTML = `
            <div class="asset">
                <p>Asset Title: ${asset.asset_title}</p>
                <p>Description: ${asset.asset_description}</p>
                <a href="${asset.asset_content}" target="_blank">Read More</a>
            </div>
        `;
    } else if (asset.asset_content_type === 'threadbuilder') {
        assetHTML = `
            <div class="asset">
                <p>Asset Title: ${asset.asset_title}</p>
                <p>Description: ${asset.asset_description}</p>
                <input type="text" placeholder="Write your thoughts here...">
            </div>
        `;
    }

    return assetHTML;
}

// Render the task and assets on the webpage
function renderTask(task) {
    // Target the sec-items class for task title and description
    const secItems = document.querySelector(".sec-items");
    secItems.innerHTML = `
        <div class="heading">
            <h2>${task.task_title}</h2>
        </div>
        <div class="heading">
            <p>${task.task_description}</p>
        </div>
    `;

    // Target the boxes for assets
    const boxes = document.querySelectorAll(".grid .box");

    // Map assets to respective boxes
    task.assets.forEach((asset, index) => {
        if (boxes[index]) {
            const box = boxes[index];
            let content = "";

            if (asset.asset_content_type === "video") {
                content = `
                    <iframe src="${asset.asset_content}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
            } else if (asset.asset_content_type === "article") {
                content = `<a href="${asset.asset_content}" target="_blank">Read More</a>`;
            } else if (asset.asset_content_type === "threadbuilder") {
                content = `<input type="text" placeholder="Write your thoughts here...">`;
            }

            box.innerHTML = `
                <div class="card-header">
                    <h2>${asset.asset_title}</h2>
                    <i class="info-icon" title="More information">ℹ</i>
                </div>
                <p class="description">
                    <strong>Description:</strong> ${asset.asset_description}
                </p>
                <div class="content-section">${content}</div>
            `;
        }
    });
}

// Combine the fetching and rendering logic
fetchTaskData().then((taskData) => {
    renderTask(taskData); // Render the task once data is fetched
});


