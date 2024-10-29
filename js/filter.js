function applyFilters() {
    const qualityFilters = Array.from(document.querySelectorAll('input[type="checkbox"][id^="quality"]:checked'))
                                .map(checkbox => checkbox.value);

    const dlcFilters = Array.from(document.querySelectorAll('input[type="checkbox"][id^="dlc"]:checked'))
                            .map(checkbox => checkbox.value);

    localStorage.setItem('qualityFilters', JSON.stringify(qualityFilters));
    localStorage.setItem('dlcFilters', JSON.stringify(dlcFilters));

    document.querySelectorAll('#itemsTable tr').forEach(row => {
        const quality = row.getAttribute('data-quality');
        const dlc = row.getAttribute('data-dlc');

        const matchesQuality = qualityFilters.length === 0 || qualityFilters.includes(quality);
        const matchesDlc = dlcFilters.length === 0 || dlcFilters.includes(dlc);

        row.style.display = matchesQuality && matchesDlc ? '' : 'none';
    });
}

function loadFilters() {
    const qualityFilters = JSON.parse(localStorage.getItem('qualityFilters')) || [];
    const dlcFilters = JSON.parse(localStorage.getItem('dlcFilters')) || [];

    qualityFilters.forEach(value => {
        const checkbox = document.getElementById(`quality${value}`);
        if (checkbox) checkbox.checked = true;
    });

    dlcFilters.forEach(value => {
        const checkbox = document.getElementById(`dlc${value}`);
        if (checkbox) checkbox.checked = true;
    });

    applyFilters();
}