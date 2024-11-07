export function showAlert(type, message) {
    // Check if SweetAlert script is already loaded to avoid duplicates
    if (!window.Swal) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
        script.onload = () => {
            Swal.fire({
                icon: type,
                title: message,
                showConfirmButton: false,
                timer: 1500,
            });
        };
        document.head.appendChild(script);
    } else {
        Swal.fire({
            icon: type,
            title: message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
}
