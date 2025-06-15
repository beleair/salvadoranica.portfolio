
const searchInput = document.getElementById('searchInput');
const feed = document.getElementById('feed');

const filterBtn = document.getElementById('filterBtn');
if (filterBtn) {
    filterBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();

        const posts = feed.getElementsByClassName('post');
        Array.from(posts).forEach(post => {
            const text = post.innerText.toLowerCase();
            if (text.includes(query)) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    });
}


const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeButton = document.getElementsByClassName('close-button')[0];


const postImages = document.querySelectorAll('.post img');


postImages.forEach(img => {
    img.addEventListener('click', () => {
        imageModal.style.display = 'block';
        modalImage.src = img.src;
        captionText.innerHTML = img.alt; 
    });
});


closeButton.addEventListener('click', () => {
    imageModal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target == imageModal) {
        imageModal.style.display = 'none';
    }
});



const createBtn = document.getElementById('createBtn');
const updatesBtn = document.getElementById('updatesBtn');
const messagesBtn = document.getElementById('messagesBtn');
const settingsBtn = document.getElementById('settingsBtn');

const allNavButtons = document.querySelectorAll('.nav-btn');


if (createBtn) {
    createBtn.addEventListener('click', (e) => {
        allNavButtons.forEach(btn => btn.classList.remove('active'));
        createBtn.classList.add('active');
    });
}

if (updatesBtn) {
    updatesBtn.addEventListener('click', (e) => {
        allNavButtons.forEach(btn => btn.classList.remove('active'));
        updatesBtn.classList.add('active');
    });
}

if (messagesBtn) {
    messagesBtn.addEventListener('click', (e) => {
        allNavButtons.forEach(btn => btn.classList.remove('active'));
        messagesBtn.classList.add('active');
    });
}

if (settingsBtn) {
    settingsBtn.addEventListener('click', (e) => {
        allNavButtons.forEach(btn => btn.classList.remove('active'));
        settingsBtn.classList.add('active');
    });
}

const homeBtn = document.getElementById('homeBtn');
const profileBtn = document.getElementById('profileBtn');

if (homeBtn) {
    homeBtn.addEventListener('click', () => {
        allNavButtons.forEach(btn => btn.classList.remove('active'));
        homeBtn.classList.add('active');
    });
}

if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        allNavButtons.forEach(btn => btn.classList.remove('active'));
        profileBtn.classList.add('active');
    });
}

const categoryFilterButtons = document.querySelectorAll('.filter-tag');
const allPosts = document.querySelectorAll('.post');


function filterPosts(category) {
    allPosts.forEach(post => {
        const postCategories = post.dataset.category ? post.dataset.category.split(' ') : [];

        if (category === 'all') {
            if (postCategories.includes('all-only')) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none'; 
            }
        } else {
            if (postCategories.includes(category)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none'; 
            }
        }
    });
}

categoryFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        let selectedCategory = button.textContent.toLowerCase().replace(/\s+/g, '-');
        const specificCategoryClasses = [
            'feed--category-fits',
            'feed--category-uni-life',
            'feed--category-mantras',
            'feed--category-safe-space',
            'feed--category-clean-diet'
        ];
        feed.classList.remove(...specificCategoryClasses);
        if (selectedCategory !== 'all') {
            feed.classList.add(`feed--category-${selectedCategory}`);
        }
        filterPosts(selectedCategory);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    filterPosts('all'); 
    const allButton = document.querySelector('.filter-tag:first-child');
    if (allButton && allButton.textContent.toLowerCase() === 'all') {
        allButton.classList.add('active');
    }
    const specificCategoryClasses = [
        'feed--category-fits', 'feed--category-uni-life', 'feed--category-mantras',
        'feed--category-safe-space', 'feed--category-clean-diet'
    ];
    feed.classList.remove(...specificCategoryClasses);
});




const profileActionButtons = document.querySelectorAll('.profile-action-btn'); 
const profileTabButtons = document.querySelectorAll('.profile-tabs .tab-btn'); 
const boardCards = document.querySelectorAll('.board-card'); 

const createdContent = document.getElementById('createdContent');
const savedContent = document.getElementById('savedContent');


const createPinBtn = document.querySelector('.create-pin-btn');



function handleActiveState(clickedButton, groupSelector) {
    const groupButtons = document.querySelectorAll(groupSelector);
    groupButtons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
}



if (profileActionButtons.length > 0) {
    profileActionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleActiveState(button, '.profile-action-btn');
        });
    });
}


if (profileTabButtons.length > 0) {
    profileTabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleActiveState(button, '.profile-tabs .tab-btn');
            if (button.id === 'createdTab') {
                if (createdContent) createdContent.style.display = 'block';
                if (savedContent) savedContent.style.display = 'none';
            } else if (button.id === 'savedTab') {
                if (createdContent) createdContent.style.display = 'none';
                if (savedContent) savedContent.style.display = 'block';
            }
        });
    });

 
    const initialActiveTab = document.querySelector('.profile-tabs .tab-btn.active');
    if (initialActiveTab) {
        if (initialActiveTab.id === 'createdTab') {
            if (createdContent) createdContent.style.display = 'block';
            if (savedContent) savedContent.style.display = 'none';
        } else if (initialActiveTab.id === 'savedTab') {
            if (createdContent) createdContent.style.display = 'none';
            if (savedContent) savedContent.style.display = 'block';
        }
    }
}


if (boardCards.length > 0) {
    boardCards.forEach(card => {
        card.addEventListener('click', (e) => {
            handleActiveState(card, '.board-card');
        });
    });
}

if (createPinBtn) {
    createPinBtn.addEventListener('click', (e) => {
      window.location.href = 'createpin.html';
    });
}
document.addEventListener('DOMContentLoaded', () => {
 

   const uploadBox = document.getElementById('uploadBox');
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');
    const moreOptionsToggle = document.querySelector('.more-options-toggle');
    const moreOptionsContent = document.querySelector('.more-options-content');
    const toggleButtons = document.querySelectorAll('a.toggle-button');


    if (uploadBox) {
        uploadBox.addEventListener('click', () => {
            fileInput.click();
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', function() {
            handleFiles(this.files);
        });
    }

    if (uploadBox) {
        uploadBox.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadBox.style.borderColor = '#007bff';
        });

        uploadBox.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadBox.style.borderColor = '#cccccc';
        });

        uploadBox.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadBox.style.borderColor = '#cccccc';
            const files = e.dataTransfer.files;
            handleFiles(files);
        });
    }

    function handleFiles(files) {
        if (files.length > 0) {
            const file = files[0];
            const fileType = file.type;

            
            imagePreview.innerHTML = '';
            imagePreview.style.display = 'block'; 

            if (fileType.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = 'Uploaded image preview';
                    imagePreview.appendChild(img);
                    uploadBox.style.display = 'none'; 
                };
                reader.readAsDataURL(file);
       
            } else {
                imagePreview.innerHTML = '<p style="color: red;">Unsupported file type.</p>';
                uploadBox.style.display = 'flex'; 
            }
        }
    }

  
    if (moreOptionsToggle && moreOptionsContent) {
        moreOptionsToggle.addEventListener('click', () => {
            const isExpanded = moreOptionsContent.style.display === 'block';
            moreOptionsContent.style.display = isExpanded ? 'none' : 'block';
            moreOptionsToggle.classList.toggle('expanded', !isExpanded);
        });
    }

   
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            toggleButtons.forEach(btn => {
                btn.classList.remove('active-toggle');
            });
            this.classList.add('active-toggle');
            console.log(`${this.textContent.trim()} button clicked and set active.`);
        });
    });
});

